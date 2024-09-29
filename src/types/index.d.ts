type UIItem = {
  id: string;
  title: string;
  createdAt: string;
};

type UIItems = {
  list: UIItem[];
};

type UIGroup = {
  id: string;
  title: string;
  list: UIItem[];
  createdAt: string;
};

type UIGroups = UIGroup[];

type UIHistory = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

type UIHistories = UIHistory[];
