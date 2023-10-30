/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface IProps {
  title: string;
}

class Component<IProps> {
  constructor(public props: IProps) {}
}

class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
