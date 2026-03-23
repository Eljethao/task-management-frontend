export type UserRole = 'Admin' | 'Developer' | 'Project Manager' | 'Tester' | 'UXUI' | 'Lead Developer';
export type TaskStatus = 'To Do' | 'In Progress' | 'Code Review' | 'Testing' | 'Done';
export type TaskPriority = 'Low' | 'Medium' | 'High' | 'Critical';
export type ProjectStatus = 'Planning' | 'Active' | 'On Hold' | 'Completed' | 'Archived';
export type ProjectPhase = 'Analysis' | 'Development' | 'Testing' | 'Completed' | 'On Hold' | 'Archived';
export type TimelineStatus = 'On Track' | 'At Risk' | 'Delayed' | 'Completed';

export interface User {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  isActive: boolean;
  createdAt: string;
}

export interface ProjectDocument {
  name: string;
  url: string;
  mimetype: string;
  size: number;
  uploadedAt: string;
}

export interface Project {
  _id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  targetDate: string;
  internalTestDate?: string | null;
  uatDate?: string | null;
  productionDate?: string | null;
  ownerId: User | string;
  memberIds: (User | string)[];
  logoUrl?: string;
  documents?: ProjectDocument[];
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  _id: string;
  projectId: string | Project;
  epicId?: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assigneeId?: User | string;
  reporterId: User | string;
  storyPoints?: number;
  tags: string[];
  startDate?: string;
  endDate?: string;
  githubPrLink?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Standup {
  _id: string;
  userId: User | string;
  projectId: Project | string;
  date: string;
  yesterday: string;
  today: string;
  blockers: string;
  createdAt: string;
}

export interface StandupComment {
  _id: string;
  standupId: string;
  userId: User | string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardMetrics {
  totalTasks: number;
  completionRate: number;
  totalUsers: number;
  tasksByStatus: { _id: TaskStatus; count: number; storyPoints: number }[];
}

export interface ProjectOverviewItem {
  _id: string;
  name: string;
  status: ProjectStatus;
  phase: ProjectPhase;
  timelineStatus: TimelineStatus;
  daysUntilDeadline: number | null;
  targetDate: string;
  internalTestDate?: string | null;
  uatDate?: string | null;
  productionDate?: string | null;
  memberCount: number;
  taskStats: {
    total: number;
    done: number;
    inProgress: number;
    testing: number;
    toDo: number;
    byStatus: Record<string, number>;
  };
  completionPct: number;
  logoUrl?: string | null;
}

export interface PeakPeriod {
  weekStart: string;
  taskCount: number;
}

export interface WorkloadItem {
  _id: string;
  taskCount: number;
  totalStoryPoints: number;
  user: { name: string; email: string; department: string; role: string };
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}
