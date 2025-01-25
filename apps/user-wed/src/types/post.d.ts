type TypeNodeType = 'code' | 'text' | 'image' | 'link' | 'lable';

type NodeType = {
  Id: string;
  Index: number;
  Type: TypeNodeType;
  Content?: string;
  ImageURL?: string;
};

interface IPost {
  Id: string;
  Title: string;
  Foreword: string;
  Node?: Array<NodeType>;
}
