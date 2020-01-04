import { range } from 'd3-array';
import { scaleQuantile } from 'd3-scale';

export function updatePercentiles(featureCollection: any, accessor: any) {
  const { features } = featureCollection;
  const scale = scaleQuantile()
    .domain(features.map(accessor))
    .range(range(9));
  features.forEach((f: any) => {
    const value = accessor(f);
    f.properties.value = value;
    f.properties.percentile = scale(value);
  });
}
