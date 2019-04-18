export const documents = [
    { id: 0, name: 'Domicile', mandatory: false },
    { id: 1, name: 'Birth Certificate', mandatory: false },
    { id: 2, name: 'Marksheets', mandatory: false },
    { id: 3, name: 'Police Clearance', mandatory: false },
    { id: 4, name: 'Passport', mandatory: false },
    { id: 5, name: 'Declaration', mandatory: false }
  ];

export const AllDocuments = [
    { id: 0, name: 'Domicile' },
    { id: 1, name: 'Birth Certificate' },
    { id: 2, name: 'Marksheets'},
    { id: 3, name: 'Police Clearance'},
    { id: 4, name: 'Passport' },
    { id: 5, name: 'Declaration' }
];

export const INTERNATIONAL_MANADATORY_DOCUMENTS = [0,1,2,3,4,5];
export const DOMESTIC_MANADATORY_DOCUMENTS = [0,1,2,5];

export const categories = [
    { id: 1, name: 'Domestic' },
    { id: 2, name: 'International' }
];

export enum CATEGORIES {
    Domestic = 1,
    International = 2
}