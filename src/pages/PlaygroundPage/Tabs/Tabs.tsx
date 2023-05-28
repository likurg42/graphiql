import { useState } from 'react';
import styled from 'styled-components';

type Tab = {
  title: string;
  element: JSX.Element;
};

type TabsProps = {
  tabList: Tab[];
};

type ContainerProps = {
  open?: boolean;
};

const Container = styled.div`
  width: 100%;
  min-height: ${(props: ContainerProps) => (props.open ? '150px' : '0')};
`;

const InputWrapper = styled.div`
  padding-top: 1rem;
  width: 100%;
`;

type SubTitleProps = {
  active?: boolean;
};

const SubTitle = styled.button`
  padding-bottom: 0.5rem;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  border: none;
  background: none;
  cursor: pointer;
  ${(props: SubTitleProps) =>
    props.active &&
    `
    border-bottom: 2px solid black;
  `}
`;

type EditorProps = {
  active: boolean;
};

const Editor = styled.div`
  display: ${(props: EditorProps) => (props.active ? 'block' : 'none')};
  height: 150px;
`;

export const Tabs = ({ tabList }: TabsProps) => {
  const [tabName, setTabName] = useState<string | null>(null);

  const handleChangeTab = (title: string) => {
    if (tabName === title) {
      setTabName(null);
    }

    if (tabName !== title) {
      const currentTab = tabList.find((t) => t.title === title);
      if (currentTab) {
        setTabName(title);
      }
    }
  };

  return (
    <Container open={!!tabName}>
      <div>
        {tabList.map((tab) => (
          <SubTitle
            key={`tab-${tab.title}`}
            type="button"
            active={tab.title === tabName}
            onClick={() => handleChangeTab(tab.title)}
          >
            {tab.title}
          </SubTitle>
        ))}
      </div>
      <InputWrapper>
        {tabList.map((t) => (
          <Editor key={`editor-${t.title}`} active={t.title === tabName}>
            {t.element}
          </Editor>
        ))}
      </InputWrapper>
    </Container>
  );
};
