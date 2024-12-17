import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';

const ComparativeAnalytics = () => {
  // Enhanced fake data for demonstration
  const locationData = [
    { location: 'Location A', performance: 75 },
    { location: 'Location B', performance: 85 },
    { location: 'Location C', performance: 65 },
    { location: 'Location D', performance: 90 },
    { location: 'Location E', performance: 80 },
  ];

  const timePeriodData = [
    { month: 'Last Month', performance: 70 },
    { month: 'This Month', performance: 80 },
    { month: 'Next Month', performance: 90 },
  ];

  const competitorData = [
    { competitor: 'Competitor X', performance: 90 },
    { competitor: 'Competitor Y', performance: 75 },
    { competitor: 'Competitor Z', performance: 80 },
    { competitor: 'Competitor A', performance: 85 },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Comparative Analytics
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Performance by Location</Typography>
              <div style={{ height: '400px' }}>
                <ResponsiveBar
                  data={locationData}
                  keys={['performance']}
                  indexBy="location"
                  margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
                  padding={0.3}
                  colors={{ scheme: 'nivo' }}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Location',
                    legendPosition: 'middle',
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Performance',
                    legendPosition: 'middle',
                    legendOffset: -40,
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Performance Over Time</Typography>
              <div style={{ height: '400px' }}>
                <ResponsiveLine
                  data={[
                    {
                      id: 'Performance',
                      data: timePeriodData.map((data) => ({
                        x: data.month,
                        y: data.performance,
                      })),
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
                    legend: 'Months',
                    legendOffset: 36,
                    legendPosition: 'middle',
                  }}
                  axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Performance',
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
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Competitor Benchmarking</Typography>
              <div style={{ height: '400px' }}>
                <ResponsivePie
                  data={competitorData.map(data => ({
                    id: data.competitor,
                    value: data.performance,
                  }))}
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

export default ComparativeAnalytics;
