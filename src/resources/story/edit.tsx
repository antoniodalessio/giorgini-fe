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
    DateInput
} from 'react-admin';

import RichTextInput from 'ra-input-rich-text';
import { Divider } from '@material-ui/core';

import BookIcon from '@material-ui/icons/Book';
export const ProductIcon = BookIcon;

import SortableGridField from '../../components/sortableGridField'
import Swapper from '../../components/swapper'
import SeoField from '../../components/SeoField'


const ProductTitle = ({record = {title: ''}}) => {
    return <span>{record.title}</span>;
};

const Images = (props) => {
    return <SortableGridField 
        {...props}
        sortKey="ord"
        resources="image"
        parentResources="product"
        items={props.record.images}
    />
};


const StoryEdit = (props) => {

    return (
      <Edit title={<ProductTitle />} {...props}>
        <TabbedForm>
          <FormTab label="Generali">
                <BooleanField source="published" />
                <TextInput source="order" />
                <TextInput source="name" />
                <TextInput source="text" fullWidth={true} multiline={true}/>
                <TextInput parse={v => v.replace(" ", "-")} source="slug" validate={required()} fullWidth={true}/>
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


export default StoryEdit