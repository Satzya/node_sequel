module.exports = async () => {
    const BrandDetails = require('./../models/BrandDetails');
    const MetalDetails = require('./../models/MetalDetails');

    MetalDetails.hasMany((BrandDetails, { as: 'brandId', foreignKey: 'id' }));
    BrandDetails.belongsTo(MetalDetails, { as: 'MetalDetails', foreignKey: 'id' });

    const brandDetails = await BrandDetails.create({
        name: 'TATA TISCON'
    })

    const MetalDetails = await MetalDetails.create({
        name: 'Iron',
        brandId: brandDetails.id
    })
}