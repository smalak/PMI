import React from 'react';
import clone from 'clone';
import IntlMessages from '../../../components/utility/intlMessages';
import { DateCell, ImageCell, LinkCell, TextCell, IconCell } from './helperCells';

const renderCell = (object, type, key, opt) => {
  const value = object[key];
  switch (type) {
    case 'ImageCell':
      return ImageCell(value);
    case 'DateCell':
      return DateCell(value);
    case 'LinkCell':
      return LinkCell(value);
    case 'IconCell':
      return IconCell(value, opt);
    default:
      return TextCell(value);
  }
};

const columns = [
  {
    title: '#↓',
    key: 'order',
    width: 30,
    render: object => renderCell(object, 'TextCell', 'order')
  },
  {
    title: '',
    key: 'image',
    width: 20,
    className: 'isoImageCell',
    render: object => renderCell(object, 'ImageCell', 'image')
  },
  {
    title: 'Sürücü',
    key: 'surucu',
    width: 80,
    render: object => renderCell(object, 'TextCell', 'surucu')
  },
  {
    title: 'Araç',
    key: 'arac',
    width: 80,
    render: object => renderCell(object, 'TextCell', 'arac')
  },
  {
    title: 'Skor',
    key: 'skor',
    width: 40,
    render: object => renderCell(object, 'TextCell', 'skor')
  },
  {
    title: 'Sert Fren',
    key: 'sertFren',
    width: 40,
    render: object => renderCell(object, 'IconCell', 'sertFren', 'magenta')
  },
  {
    title: 'Ani Hızlanma',
    key: 'aniHizlanma',
    width: 40,
    render: object => renderCell(object, 'IconCell', 'aniHizlanma', 'purple')
  },
  {
    title: 'Sert Dönüş',
    key: 'sertDonus',
    width: 40,
    render: object => renderCell(object, 'IconCell', 'sertDonus', 'red')
  },
  {
    title: 'Hız Aşımı',
    key: 'hizAsimi',
    width: 40,
    render: object => renderCell(object, 'IconCell', 'hizAsimi', 'orange')
  }
];
const smallColumns = [columns[0], columns[1], columns[2], columns[3], columns[4], columns[5], columns[6], columns[7], columns[8]];
const sortColumns = [
  { ...columns[0], sorter: true },
  { ...columns[1], sorter: true },
  { ...columns[2], sorter: true },
  { ...columns[3], sorter: true },
  { ...columns[4], sorter: true },
  { ...columns[5], sorter: true },
  { ...columns[6], sorter: true },
  { ...columns[7], sorter: true },
  { ...columns[8], sorter: true }
];
const editColumns = [
  { ...columns[1], width: 300 },
  { ...columns[2], width: 300 },
  columns[3],
  columns[4]
];
const groupColumns = [
  columns[0],
  {
    title: 'Name',
    children: [columns[1], columns[2]]
  },
  {
    title: 'Address',
    children: [columns[3], columns[4]]
  }
];
const tableinfos = [
  {
    title: 'Simple Table',
    value: 'simple',
    columns: clone(smallColumns)
  },
  {
    title: 'Sortable Table',
    value: 'sortView',
    columns: clone(sortColumns)
  },
  {
    title: 'Search Text',
    value: 'filterView',
    columns: clone(smallColumns)
  },
  {
    title: 'Editable View',
    value: 'editView',
    columns: clone(editColumns)
  },
  {
    title: 'Grouping View',
    value: 'groupView',
    columns: clone(groupColumns)
  },
  {
    title: 'Customized View',
    value: 'customizedView',
    columns: clone(columns)
  }
];
export { columns, tableinfos };
