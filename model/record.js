
module.exports = (sequelize, DataTypes) => {
  var Record = sequelize.define('Record', {
      date: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true
      }, weight: {
          type: DataTypes.STRING,
          allowNull: false,
      },WLoss: {
        type: DataTypes.Boolean,
        allowNull: false,
        defaultValue: false
      }
    /*date: DataTypes.STRING,
    Weight: DataTypes.STRING,
    WLoss: DataTypes.STRING,
    Delete: DataTypes.STRING*/   
  })
  Record.sync({force: true}).then( () => {
      console.log('synced table')
    // associations can be defined here
  });
  return Record
};