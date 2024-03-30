import React from "react";
import { Layout } from "antd";
import StoryForm from "../StoryForm/StoryForm";
import StoryList from "../StoryList/StoryList";
import styles from "./styles";

const { Sider, Content } = Layout;
const Home = () => {
  return (
    <Layout styles={styles.layout}>
      <Sider style={styles.sider}>
        <StoryForm styles={styles.storyForm} />
      </Sider>
      <Content styles={styles.content}>
        <StoryList />
      </Content>
    </Layout>
  );
};

export default Home;
