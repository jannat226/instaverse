import React, { useEffect } from "react";
import { Layout } from "antd";
import StoryForm from "../StoryForm/StoryForm";
import StoryList from "../StoryList/StoryList";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { getStories } from "../../actions/stories";

const { Sider, Content } = Layout;
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);
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
