import * as React from 'react';
import { useState, useEffect } from 'react';

import { 
    TextInput,
} from 'react-admin';

const SeoField = (props: any) => {

    const [metatitle, setMetaTitle] = useState('')
    const [metadescription, setMetaDescription] = useState('')
  
    useEffect(() => {
      if (props?.record?.meta && props.record.meta?.title) {
        setMetaTitle(props.record.meta?.title)
      }
      if (props?.record?.meta && props?.record?.meta?.description) {
        setMetaDescription(props.record.meta.description)
      }
    },[props?.record?.meta?.title, props?.record?.meta?.description])
  
    const changeMetaTitle = (text: string) => {
      setMetaTitle(text)
    };
  
    const changeMetadescription = (text: string) => {
      setMetaDescription(text)
    };
  
    return (
      <div>
        <TextInput source="meta.title" label="meta title" helperText={`(${metatitle.length}) Max 65 caratteri`} onChange={v => { changeMetaTitle(v.target.value)}}/>
        <TextInput source="meta.description"label="meta description" helperText={`(${metadescription.length}) Max 160 caratteri`} onChange={v => { changeMetadescription(v.target.value)}} fullWidth={true}/>
        <TextInput source="meta.keywords" label="meta keywords" />
      </div>
    )
  }


  export default SeoField