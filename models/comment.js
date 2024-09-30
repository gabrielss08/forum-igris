'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Um Comment pertence a um Post
      Comment.belongsTo(models.Post, {
        foreignKey: 'postsId',  // Associado à coluna postsId
        as: 'post'  // Alias para acessar o post ao qual o comentário pertence
      });
    }
  }
  Comment.init({
    postsId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
