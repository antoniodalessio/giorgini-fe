import * as React from 'react';
import { 
    SelectInput,
    Filter,
    List,
    Datagrid, 
    TextField,
    EditButton,
    ReferenceField,
    BooleanField,
    ChipField,
    SearchInput
} from 'react-admin';

const ProductFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
    </Filter>
);

const StoryList = (props) => (
    <List {...props } exporter={false} filters={<ProductFilter />}>
        <Datagrid>
            <BooleanField source="published" />
            <TextField source="order" />
            <TextField source="name" />
            <TextField source="text" />
            <EditButton basePath="/story" />
        </Datagrid>
    </List>
);


export default StoryList
