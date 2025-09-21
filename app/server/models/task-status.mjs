/**
 * Defines the 'task status' entity in the database.
 *
 * @param {object} sequelize - The Sequelize instance used to define the model.
 * @param {object} DataTypes - A collection of data types supported by Sequelize.
 * @returns {object} A Sequelize model representing the 'task status' entity.
 *
 * @property {string} label - The label of the status. This field is required.
 * @property {string} description - A detailed description of the status. This field is required.
 */
export default (sequelize, DataTypes) => {
  return sequelize.define('comment', {
    label: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    enabled: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		}
  })
}
