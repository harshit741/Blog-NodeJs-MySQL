module.exports = (conn, Sequelize) => {
  const {STRING, TEXT} = Sequelize
  const Post = conn.define("post", {
    title: {
      type: STRING
    },
    description: {
      type: TEXT
    },
    author: {
      type: STRING
    }
  });

  return Post;
};