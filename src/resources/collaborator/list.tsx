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

const CollaboratorFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
    </Filter>
);

const CollaboratorList = (props) => (
    <List {...props } exporter={false} filters={<CollaboratorFilter />}>
        <Datagrid>
            <TextField source="order" />
            <TextField source="appellation" label="title" />
            <TextField source="name" />
            <TextField source="text" />
            <EditButton basePath="/collaborator" />
        </Datagrid>
    </List>
);


export default CollaboratorList
