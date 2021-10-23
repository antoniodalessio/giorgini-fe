import * as React from 'react';
import { 
    required,
    SelectInput,
    ArrayInput,
    SimpleFormIterator,
    Create,
    TextInput,
    ReferenceInput,
    TabbedForm,
    FormTab,
    BooleanField,
    ImageInput,
    ImageField,
    DateField
} from 'react-admin';

import { TextField } from '@material-ui/core';
import SeoField from '../../components/SeoField'

import RichTextInput from 'ra-input-rich-text';

import ImgField from '../../components/imgField'

const StoryCreate = (props) => (
	<Create title="Create a Post" {...props}>
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
								<ImageInput source="file" label={"immagine"} accept="image/*">
									<ImageField source="uri" />
								</ImageInput>
							</SimpleFormIterator>
					</ArrayInput>
				</FormTab>
		</TabbedForm>
	</Create>
);


export default StoryCreate