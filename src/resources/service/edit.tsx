import * as React from 'react';
import { 
    required,
    SelectInput,
    ArrayInput,
    ImageInput,
    ImageField,
    SimpleFormIterator,
    Edit,
    TextInput,
    ReferenceInput,
    TabbedForm,
    FormTab,
    BooleanField,
    FormDataConsumer,
    DateInput,
    TextField,
    RadioButtonGroupInput
} from 'react-admin';

import RichTextInput from 'ra-input-rich-text';

import BookIcon from '@material-ui/icons/Book';
export const ProductIcon = BookIcon;

import SortableGridField from '../../components/sortableGridField'
import SeoField from '../../components/SeoField'


const Title = ({record = {title: ''}}) => {
    return <span>{record.title}</span>;
};

const Images = (props) => {
    return <SortableGridField 
        {...props}
        sortKey="ord"
        resources="image"
        parentResources="service"
        items={props.record.images}
    />
};

const imageTypeChoice = ['full', 'half'];


const ServiceEdit = (props) => {

    return (
      <Edit title={<Title />} {...props}>
        <TabbedForm>
          <FormTab label="Generali">
                        <BooleanField source="published" />
                        <TextInput source="order" />
						<TextInput source="title" />
						<TextInput source="description" fullWidth={true} multiline={true}/>
						<RichTextInput source="body" />
						<TextInput source="icon" />
						<TextInput parse={v => v.replace(/\s/g, "-").toLowerCase()} source="slug" validate={required()} fullWidth={true}/>
          </FormTab>
          <FormTab label="SEO">
            <SeoField />
          </FormTab>
          <FormTab label="immagini">
              <ArrayInput source="images">
                  <SimpleFormIterator>
                    <TextInput source="uri" label="Nome file" parse={v => v.replace(" ", "-")}/>
                    <TextInput source="alt"  label="Alt"/>
                    <TextInput source="ord"  label="Ordine"/>
                    <RadioButtonGroupInput label="Type" source="type" choices={[
                        { id: 'full', name: 'full', },
                        { id: 'half', name: 'half' }
                    ]} />
                    <ImageInput source="file" label={"immagine"} accept="image/*">
                        <ImageField source="uri" />
                    </ImageInput>
                  </SimpleFormIterator>
              </ArrayInput>
          </FormTab>
          <FormTab label="Ordina immagini">
              <Images />
          </FormTab>
        </TabbedForm>
      </Edit>
    )
};


export default ServiceEdit