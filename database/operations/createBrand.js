module.exports = async () => {
    const BrandDetails = require('./../models/BrandDetails');
    const MetalDetails = require('./../models/MetalDetails');

    MetalDetails.hasMany(BrandDetails, { as: 'Brands', foreignKey: 'brandId' });
    BrandDetails.belongsTo(MetalDetails, { as: 'Metals', foreignKey: 'id' });

    const brandDetails = await BrandDetails.create({
        name: 'TATA TISCON'
    })

    const metalDetails = await MetalDetails.create({
        name: 'Iron',
        brandId: brandDetails.id
    })

    console.log(brandDetails.id, '\n', metalDetails.id);
}