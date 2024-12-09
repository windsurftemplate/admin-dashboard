import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  ButtonGroup,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// Sample data for analytics
const revenueData = [
  {
    id: 'revenue',
    data: [
      { x: 'Jan', y: 15000 },
      { x: 'Feb', y: 18000 },
      { x: 'Mar', y: 22000 },
      { x: 'Apr', y: 21000 },
      { x: 'May', y: 25000 },
      { x: 'Jun', y: 28000 },
    ],
  },
];

const categoryData = [
  { id: 'Electronics', value: 35, color: 'hsl(240, 70%, 50%)' },
  { id: 'Clothing', value: 25, color: 'hsl(100, 70%, 50%)' },
  { id: 'Books', value: 20, color: 'hsl(50, 70%, 50%)' },
  { id: 'Accessories', value: 15, color: 'hsl(310, 70%, 50%)' },
  { id: 'Other', value: 5, color: 'hsl(180, 70%, 50%)' },
];

const userActivityData = [
  {
    month: 'Jan',
    newUsers: 120,
    activeUsers: 450,
    purchases: 280,
  },
  {
    month: 'Feb',
    newUsers: 150,
    activeUsers: 480,
    purchases: 310,
  },
  {
    month: 'Mar',
    newUsers: 180,
    activeUsers: 520,
    purchases: 350,
  },
  {
    month: 'Apr',
    newUsers: 190,
    activeUsers: 550,
    purchases: 340,
  },
  {
    month: 'May',
    newUsers: 220,
    activeUsers: 580,
    purchases: 380,
  },
  {
    month: 'Jun',
    newUsers: 250,
    activeUsers: 600,
    purchases: 420,
  },
];

const hourlyActivityData = [
  {
    id: 'activity',
    data: Array.from({ length: 24 }, (_, i) => ({
      x: `${i.toString().padStart(2, '0')}:00`,
      y: Math.floor(Math.random() * 100),
    })),
  },
];

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('6months');
  const [dataType, setDataType] = useState('revenue');

  const StatCard = ({ title, value, icon, trend }) => (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
          {icon}
        </Box>
        <Typography variant="h4" component="div" sx={{ mb: 1 }}>
          {value}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TrendingUpIcon
            color={trend >= 0 ? 'success' : 'error'}
            sx={{ mr: 1 }}
          />
          <Typography
            variant="body2"
            color={trend >= 0 ? 'success.main' : 'error.main'}
          >
            {trend}% vs last period
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Analytics Dashboard
      </Typography>

      {/* Time Range Selector */}
      <Box sx={{ mb: 3 }}>
        <ButtonGroup variant="outlined">
          <Button
            onClick={() => setTimeRange('7days')}
            variant={timeRange === '7days' ? 'contained' : 'outlined'}
          >
            7 Days
          </Button>
          <Button
            onClick={() => setTimeRange('1month')}
            variant={timeRange === '1month' ? 'contained' : 'outlined'}
          >
            1 Month
          </Button>
          <Button
            onClick={() => setTimeRange('6months')}
            variant={timeRange === '6months' ? 'contained' : 'outlined'}
          >
            6 Months
          </Button>
          <Button
            onClick={() => setTimeRange('1year')}
            variant={timeRange === '1year' ? 'contained' : 'outlined'}
          >
            1 Year
          </Button>
        </ButtonGroup>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Revenue"
            value="$125,430"
            icon={<AttachMoneyIcon color="primary" />}
            trend={12.5}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Users"
            value="2,340"
            icon={<PeopleIcon color="primary" />}
            trend={8.2}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Orders"
            value="1,423"
            icon={<ShoppingCartIcon color="primary" />}
            trend={-3.8}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Growth"
            value="+15.3%"
            icon={<TrendingUpIcon color="primary" />}
            trend={15.3}
          />
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        {/* Revenue Chart */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, height: 400 }}>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">Revenue Trends</Typography>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Data Type</InputLabel>
                <Select
                  value={dataType}
                  label="Data Type"
                  onChange={(e) => setDataType(e.target.value)}
                >
                  <MenuItem value="revenue">Revenue</MenuItem>
                  <MenuItem value="orders">Orders</MenuItem>
                  <MenuItem value="users">Users</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ height: 300 }}>
              <ResponsiveLine
                data={revenueData}
                margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                curve="monotoneX"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  format: (value) => `$${value / 1000}k`,
                }}
                pointSize={8}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                enableArea={true}
                areaOpacity={0.15}
                useMesh={true}
                legends={[
                  {
                    anchor: 'top-right',
                    direction: 'column',
                    justify: false,
                    translateX: 0,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemWidth: 80,
                    itemHeight: 20,
                    symbolSize: 12,
                    symbolShape: 'circle',
                  },
                ]}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Category Distribution */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Category Distribution
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsivePie
                data={categoryData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                legends={[
                  {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 20,
                    itemsSpacing: 0,
                    itemWidth: 80,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 12,
                    symbolShape: 'circle',
                  },
                ]}
              />
            </Box>
          </Paper>
        </Grid>

        {/* User Activity */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              User Activity
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveBar
                data={userActivityData}
                keys={['newUsers', 'activeUsers', 'purchases']}
                indexBy="month"
                margin={{ top: 20, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                legends={[
                  {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                  },
                ]}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
