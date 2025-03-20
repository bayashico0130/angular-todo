export interface Task {
  id?: string;
  title: string;
  done: boolean;
  deadline?: Date;
}

export interface TaskDocument {
  id: string;
  title: string;
  done: boolean;
  deadline?: { seconds?: number; nanoseconds?: number };
}

export function fromDocument(doc: TaskDocument): Task {
  return {
    id: doc.id,
    title: doc.title,
    done: doc.done,
    deadline:
      doc.deadline && doc.deadline.seconds
        ? new Date(doc.deadline.seconds * 1000)
        : undefined,
  };
}
