const Categories = require('../../models-singular/categories.js');
let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    const categories = new Categories();
    const testCategories = {
      name: 'corey',
      description: 'cool AF'
    };
    return categories.create(testCategories)
      .then(newCatergories =>{
        Object.keys(testCategories).forEach(key => {
          expect(newCatergories[key]).toEqual(testCategories[key]);
          console.log(newCatergories);
        })
      })
    .catch(error=>console.log(error));
  });

  it('can get() a category', () => {
    const categories = new Categories();
    const testCategories = {
      name: 'corey',
      description: 'cool AF'
    };
    return categories.create(testCategories)
      .then(newCatergories => {
        return categories.get(newCatergories._id);
      })
      .then(resolvedCategories => {
        Object.keys(testCategories).forEach(key => {
          expect (resolvedCategories[key]).toEqual(testCategories[key]);
          console.log(resolvedCategories);
        })
      })
    .catch(error=>console.log(error));
  });

   it('can update() a category', () => {
    const categories = new Categories();
    const testCategories = {
      name: 'corey',
      description: 'cool AF'
    };
    return categories.create(testCategories)
      .then(newCatergories => {
        return categories.update(newCatergories._id,);
      })
      .then(updateCategories => {
        Object.keys(testCategories).forEach(key => {
          expect(updateCategories[key]).toEqual(testCategories[key]);
        })
      })
      .catch(error=>console.log(error));
  });

  // it('can delete() a category', () => {
  //   const categories = new Categories();
  //   const testCategories = {
  //     name: 'corey',
  //     description: 'cool AF'
  //   };
  // });

});