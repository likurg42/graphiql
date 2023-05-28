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
  min-height: ${(props: ContainerProps) => props.open && '150px'};
`;

const InputWrapper = styled.div`
  padding-top: 1rem;
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

export const Tabs = ({ tabList }: TabsProps) => {
  const [tabName, setTabName] = useState<string | null>(null);
  const [component, setComponent] = useState<JSX.Element | null>(null);

  const handleChangeTab = (title: string) => {
    if (tabName === title) {
      setTabName(null);
      setComponent(null);
    }

    if (tabName !== title) {
      setTabName(title);
      const currentTab = tabList.find((t) => t.title === title);
      if (currentTab) {
        setComponent(currentTab.element);
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
      <InputWrapper>{component}</InputWrapper>
    </Container>
  );
};
