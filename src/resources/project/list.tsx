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
    SearchInput,
    Pagination,
    NumberField
} from 'react-admin';

const ProjectFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
    </Filter>
);

const PostPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100, 200, 500]} {...props} />;

const Projectist = (props) => (
    <List
        {...props}
        exporter={false}
        filters={<ProjectFilter/>} 
        pagination={<PostPagination />}
        perPage={100}
        sort={{ field: 'ord', order: 'ASC' }}
    >
        <Datagrid>
            <BooleanField source="published" />
            <TextField source="title" />
            <TextField source="slug" />
            <NumberField source="ord" label="order" />
            <EditButton basePath="/project" />
        </Datagrid>
    </List>
);


export default Projectist
