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

const ServiceList = (props) => (
    <List {...props } exporter={false} filters={<ProductFilter />}>
        <Datagrid>
            <BooleanField source="published" />
            <TextField source="order" />
            <TextField source="title" />
            <TextField source="slug" />
            <TextField source="icon" />
            <EditButton basePath="/service" />
        </Datagrid>
    </List>
);


export default ServiceList
