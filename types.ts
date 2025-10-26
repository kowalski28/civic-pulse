
export enum Page {
  Home = 'HOME',
  Report = 'REPORT',
  Education = 'EDUCATION',
  Solutions = 'SOLUTIONS',
}

export enum ReportCategory {
  Potholes = 'Potholes',
  OpenDrainage = 'Open Drainage',
  WaterLogging = 'Water Logging',
  HeavyTraffic = 'Heavy Traffic',
  GarbageManagement = 'Garbage Management',
  WaterLandPollution = 'Water/Land Pollution',
  StreetlampIssue = 'Streetlamp Issue',
  PoorRoads = 'Poor Roads',
  Other = 'Other',
}

export interface ReportFormState {
  category: ReportCategory | '';
  address: string;
  pincode: string;
  district: string;
  state: string;
  reporterName: string;
  photos: File[];
  description: string;
}

export interface EducationTopic {
  id: string;
  title: string;
  thumbnail: string;
  shortDescription: string;
  fullText: string;
}

export interface Solution {
  id: string;
  category: ReportCategory;
  title: string;
  thumbnail: string;
  steps: string[];
}
