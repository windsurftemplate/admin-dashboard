import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  AttachMoney as AttachMoneyIcon,
  ShoppingCart as ShoppingCartIcon,
  Person as PersonIcon,
  Visibility as VisibilityIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from '@mui/icons-material';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';

// Sample data for charts
const lineData = [
  {
    id: 'sales',
    color: 'hsl(210, 70%, 50%)',
    data: [
      { x: 'Jan', y: 45 },
      { x: 'Feb', y: 52 },
      { x: 'Mar', y: 48 },
      { x: 'Apr', y: 61 },
      { x: 'May', y: 55 },
      { x: 'Jun', y: 67 },
      { x: 'Jul', y: 71 },
    ],
  },
];

const pieData = [
  { id: 'Electronics', value: 35, color: 'hsl(210, 70%, 50%)' },
  { id: 'Clothing', value: 25, color: 'hsl(180, 70%, 50%)' },
  { id: 'Books', value: 20, color: 'hsl(150, 70%, 50%)' },
  { id: 'Home', value: 15, color: 'hsl(120, 70%, 50%)' },
  { id: 'Other', value: 5, color: 'hsl(90, 70%, 50%)' },
];

const barData = [
  { month: 'Jan', new: 45, returning: 28 },
  { month: 'Feb', new: 52, returning: 32 },
  { month: 'Mar', new: 49, returning: 35 },
  { month: 'Apr', new: 62, returning: 42 },
  { month: 'May', new: 58, returning: 45 },
  { month: 'Jun', new: 71, returning: 52 },
];

const salesData = [
  {
    id: 'sales',
    data: [
      { x: 'Jan', y: 45 },
      { x: 'Feb', y: 52 },
      { x: 'Mar', y: 49 },
      { x: 'Apr', y: 62 },
      { x: 'May', y: 58 },
      { x: 'Jun', y: 71 },
    ],
  },
];

const customerSegmentData = [
  { id: 'Electronics', value: 35 },
  { id: 'Clothing', value: 25 },
  { id: 'Food', value: 20 },
  { id: 'Books', value: 15 },
  { id: 'Other', value: 5 },
];

const recentOrders = [
  { id: 1, customer: 'John Doe', product: 'Product A', amount: 100, status: 'Completed', date: '2022-01-01' },
  { id: 2, customer: 'Jane Doe', product: 'Product B', amount: 200, status: 'Processing', date: '2022-01-02' },
  { id: 3, customer: 'John Smith', product: 'Product C', amount: 300, status: 'Completed', date: '2022-01-03' },
];

const topProducts = [
  { name: 'Product A', sales: 100, revenue: 10000, growth: 10 },
  { name: 'Product B', sales: 200, revenue: 20000, growth: -5 },
  { name: 'Product C', sales: 300, revenue: 30000, growth: 15 },
];

const Dashboard = () => {
  const StatCard = ({ title, value, icon, trend, subtitle }) => (
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
          {trend > 0 ? (
            <ArrowUpwardIcon color="success" sx={{ mr: 1 }} />
          ) : (
            <ArrowDownwardIcon color="error" sx={{ mr: 1 }} />
          )}
          <Typography
            variant="body2"
            color={trend > 0 ? 'success.main' : 'error.main'}
          >
            {Math.abs(trend)}% {trend > 0 ? 'increase' : 'decrease'}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {subtitle}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Revenue"
            value="$286,400"
            icon={<AttachMoneyIcon color="primary" />}
            trend={12.5}
            subtitle="vs last month"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Orders"
            value="3,862"
            icon={<ShoppingCartIcon color="primary" />}
            trend={8.2}
            subtitle="vs last month"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Customers"
            value="2,450"
            icon={<PersonIcon color="primary" />}
            trend={-3.8}
            subtitle="vs last month"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Page Views"
            value="45,820"
            icon={<VisibilityIcon color="primary" />}
            trend={15.3}
            subtitle="vs last month"
          />
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        {/* Sales Trend Chart */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Sales Trend
            </Typography>
            <Box sx={{ height: 350 }}>
              <ResponsiveLine
                data={lineData}
                margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
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
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                enableGridX={false}
                colors={{ scheme: 'nivo' }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Product Categories Chart */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Product Categories
            </Typography>
            <Box sx={{ height: 350 }}>
              <ResponsivePie
                data={pieData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: 'nivo' }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor="#ffffff"
              />
            </Box>
          </Paper>
        </Grid>

        {/* User Statistics */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              User Statistics
            </Typography>
            <Box sx={{ height: 350 }}>
              <ResponsiveBar
                data={barData}
                keys={['new', 'returning']}
                indexBy="month"
                margin={{ top: 20, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
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

        {/* Sales Overview */}
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 2, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Sales Overview
            </Typography>
            <Box sx={{ height: 350 }}>
              <ResponsiveLine
                data={salesData}
                margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
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
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                enableGridX={false}
                curve="monotoneX"
                colors={['#2196f3', '#4caf50']}
                useMesh={true}
                legends={[
                  {
                    anchor: 'top-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  },
                ]}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Customer Segments */}
        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 2, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Customer Segments
            </Typography>
            <Box sx={{ height: 350 }}>
              <ResponsivePie
                data={customerSegmentData}
                margin={{ top: 20, right: 20, bottom: 60, left: 20 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: 'nivo' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor="#ffffff"
                legends={[
                  {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 50,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                  },
                ]}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Recent Orders */}
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Orders
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>#{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>${order.amount}</TableCell>
                      <TableCell>
                        <Chip
                          label={order.status}
                          color={
                            order.status === 'Completed'
                              ? 'success'
                              : order.status === 'Processing'
                              ? 'warning'
                              : 'default'
                          }
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{order.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Top Products */}
        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Top Products
            </Typography>
            <List>
              {topProducts.map((product, index) => (
                <React.Fragment key={product.name}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'primary.main' }}>
                        {index + 1}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={product.name}
                      secondary={
                        <Box>
                          <Typography variant="body2" component="span">
                            {product.sales} sales
                          </Typography>
                          <Typography
                            variant="body2"
                            component="span"
                            sx={{ ml: 2 }}
                          >
                            ${product.revenue.toLocaleString()}
                          </Typography>
                        </Box>
                      }
                    />
                    <ListItemSecondaryAction>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {product.growth > 0 ? (
                          <TrendingUpIcon color="success" />
                        ) : (
                          <TrendingDownIcon color="error" />
                        )}
                        <Typography
                          variant="body2"
                          color={product.growth > 0 ? 'success.main' : 'error.main'}
                          sx={{ ml: 1 }}
                        >
                          {Math.abs(product.growth)}%
                        </Typography>
                      </Box>
                    </ListItemSecondaryAction>
                  </ListItem>
                  {index < topProducts.length - 1 && <Divider variant="inset" />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
