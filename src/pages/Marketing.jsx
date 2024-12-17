import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';

const Marketing = () => {
  // Fake data for demonstration
  const trafficData = [
    { x: 'Mon', y: 120 },
    { x: 'Tue', y: 150 },
    { x: 'Wed', y: 200 },
    { x: 'Thu', y: 180 },
    { x: 'Fri', y: 220 },
    { x: 'Sat', y: 170 },
    { x: 'Sun', y: 190 },
  ];

  const campaignData = [
    { campaign: 'Email', revenue: 3000 },
    { campaign: 'Ads', revenue: 2000 },
    { campaign: 'Social Media', revenue: 1000 },
  ];

  const engagementData = [
    { id: 'Email Open Rate', value: 25 },
    { id: 'Click-Through Rate', value: 10 },
    { id: 'Social Media Engagement', value: 300 },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Marketing and Engagement Data
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Website Traffic Analytics</Typography>
              <div style={{ height: 300 }}>
                <ResponsiveLine
                  data={[
                    {
                      id: 'Visits',
                      data: trafficData,
                    },
                  ]}
                  margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
                  axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Days',
                    legendOffset: 36,
                    legendPosition: 'middle',
                  }}
                  axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Visits',
                    legendOffset: -40,
                    legendPosition: 'middle',
                  }}
                  enablePoints={false}
                  enableGridX={false}
                  enableGridY={true}
                  useMesh={true}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Campaign Performance</Typography>
              <div style={{ height: 300 }}>
                <ResponsiveBar
                  data={campaignData}
                  keys={['revenue']}
                  indexBy="campaign"
                  margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
                  padding={0.3}
                  colors={{ scheme: 'nivo' }}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Campaign',
                    legendPosition: 'middle',
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Revenue',
                    legendPosition: 'middle',
                    legendOffset: -40,
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5">Customer Engagement</Typography>
              <div style={{ height: 300 }}>
                <ResponsivePie
                  data={engagementData}
                  margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  colors={{ scheme: 'nivo' }}
                  borderWidth={1}
                  borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Marketing;
