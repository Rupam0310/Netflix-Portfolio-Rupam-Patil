// queries/getTimeline.ts
import datoCMSClient from './datoCMSClient';
import { TimelineItem } from '../types';

const GET_TIMELINE = `
{
  allTimelineitems {
	  name
    timelineType
    title
    techStack
    summaryPoints
    dateRange
  }
}
`;

export async function getTimeline(): Promise<TimelineItem[]> {
  const data = await datoCMSClient.request<{ allTimelineitems: TimelineItem[] }>(GET_TIMELINE);
  return data.allTimelineitems;
}
