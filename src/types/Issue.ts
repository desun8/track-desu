export interface Issue {
  id: number
  iid: number
  project_id: number
  title: string
  description: any
  state: string
  created_at: string
  updated_at: string
  closed_at: any
  closed_by: any
  labels: string[]
  milestone: any
  assignees: Assignee[]
  author: Author
  type: string
  assignee: Assignee2
  user_notes_count: number
  merge_requests_count: number
  upvotes: number
  downvotes: number
  due_date: any
  confidential: boolean
  discussion_locked: any
  issue_type: string
  web_url: string
  time_stats: TimeStats
  task_completion_status: TaskCompletionStatus
  blocking_issues_count: number
  has_tasks: boolean
  task_status: string
  _links: Links
  references: References
  severity: string
  moved_to_id: any
  service_desk_reply_to: any
}

export interface Assignee {
  id: number
  username: string
  name: string
  state: string
  locked: boolean
  avatar_url: string
  web_url: string
}

export interface Author {
  id: number
  username: string
  name: string
  state: string
  locked: boolean
  avatar_url: string
  web_url: string
}

export interface Assignee2 {
  id: number
  username: string
  name: string
  state: string
  locked: boolean
  avatar_url: string
  web_url: string
}

export interface TimeStats {
  time_estimate: number
  total_time_spent: number
  human_time_estimate: string
  human_total_time_spent: any
}

export interface TaskCompletionStatus {
  count: number
  completed_count: number
}

export interface Links {
  self: string
  notes: string
  award_emoji: string
  project: string
  closed_as_duplicate_of: any
}

export interface References {
  short: string
  relative: string
  full: string
}
