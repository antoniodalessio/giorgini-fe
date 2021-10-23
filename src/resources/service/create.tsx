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
	DateField,
	RadioButtonGroupInput
} from 'react-admin';

import RichTextInput from 'ra-input-rich-text';

import SeoField from '../../components/SeoField'

const ServiceCreate = (props) => (
	<Create title="Create a Post" {...props}>
		<TabbedForm>
				<FormTab label="Generali">
						<BooleanField source="published" />
						<TextInput source="order" />
						<TextInput source="title" />
						<TextInput source="description" fullWidth={true} multiline={true}/>
						<RichTextInput source="body" />
						<TextInput source="icon" />
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
		</TabbedForm>
	</Create>
);


export default ServiceCreate