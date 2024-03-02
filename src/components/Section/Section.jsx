import { Header, Wreper } from './Section.style';

export const Section = ({ title, children }) => {
  return (
    <Wreper>
      <Header>{title}</Header>
      <div>{children}</div>
    </Wreper>
  );
};
