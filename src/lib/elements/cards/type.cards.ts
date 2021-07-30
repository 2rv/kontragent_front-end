export interface StatsCardType {
  title: string;
  totalStatsDay?: string | null;
  headerIcon: React.ReactElement<any>;
  children: React.ReactElement<any>;
}
