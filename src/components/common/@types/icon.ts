export type IconName = 'fishing' | 'cross-hair' | 'compass' | 'mountains' | 'chats' | 'fishing-fill' | 'cross-hair-fill' | 'mountains-fill'
  | 'arrow-up-right'


export interface Props {
  color?: string;
  name: IconName;
  size?: number;
  className?: string;
  onClick?: () => void;
}
