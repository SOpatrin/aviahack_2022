import { Series } from "../components/StorageChart/series.model";
import { apiBasePath, paths } from "../config"

export async function getSeries(): Promise<Series[]> {
  const series: Series[] = (await (await fetch(new URL(`${paths.series}?delta=50`, apiBasePath))).json()).series;
  return series;
}
