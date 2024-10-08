import {TableStyles} from '../models/table-styles';

export class TableStylesDefaultData implements TableStyles {
  table? = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    height: '400px',
  };
  header? = {
    row: {
      background: '#F7F9FB',
      display: 'flex',
      borderBottom: '1px solid #CAD4E0',
    },
    cell: {
      width: '150px',
      padding: '10px',
      display: 'flex',
      alignItems: 'center'
    },
    cellContent: {
      width: '100%',
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: 'bold',

      // Text Wrapping
      display: 'block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  };
  data? = {
    body: {
      flex: '1 1 0%',
      overflowY: 'auto',
    },
    row: {
      display: 'flex',
      borderBottom: '1px solid #E1E7EF',
    },
    cell: {
      width: '150px',
      padding: '10px',
      display: 'flex',
      alignItems: 'center'
    },
    cellContent: {
      width: '100%',
      textAlign: 'left',
      fontSize: '14px',

      // Text Wrapping
      display: 'block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
  };
  pagination? = {
    container: {
      width: '100%',
      display: 'flex',
    },
    pageNavigationButtonGroup: {
      marginLeft: 'auto',
      display: 'flex',
      gap: '10px',
    },
    prevButton: {
      border: 'none',
      padding: '10px',
      background: '#F3F4F6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    prevButtonContent: {},
    nextButton: {
      border: 'none',
      padding: '10px',
      background: '#F3F4F6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    nextButtonContent: {},
  }
}
