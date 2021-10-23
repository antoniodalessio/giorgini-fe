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

const CollaboratorCreate = (props) => (
	<Create title="Create a Post" {...props}>
		<TabbedForm>
				<FormTab label="Generali">
						<BooleanField source="published" />
						<TextInput source="order" />
						<TextInput source="appellation" label="titolo" />
						<TextInput source="name" />
						<TextInput source="text" fullWidth={true} multiline={true}/>
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


export default CollaboratorCreate