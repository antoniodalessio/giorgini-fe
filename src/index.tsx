import * as React from 'react';
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';

import dataProvider from './provider/dataProvider';
import authProvider from './provider/authProvider';

import { 
    ServiceList,
    ServiceEdit,
    ServiceCreate,
    ServiceIcon 
} from './resources/service/index';

import { 
    StoryList,
    StoryEdit,
    StoryCreate,
    StoryIcon 
} from './resources/story/index';

import { 
    PageList,
    PageEdit,
    PageIcon,
    PageCreate
} from './resources/page/index';

import { 
    UserList,
    UserEdit,
    UserIcon,
    UserCreate
} from './resources/user/index';

import { 
    CollaboratorList,
    CollaboratorEdit,
    CollaboratorIcon,
    CollaboratorCreate
} from './resources/collaborator/index';


import { 
    PublishShow,
    PubIcon
} from './resources/publish/index';

render(
    <Admin 
        dataProvider={dataProvider}
        authProvider={authProvider}
    >
        <Resource 
            name="page"
            options={{ label: 'Pagine' }}
            list={PageList}
            edit={PageEdit}
            create={PageCreate}
            icon={PageIcon}
        />
        <Resource 
            name="service"
            options={{ label: 'Servizi' }}
            list={ServiceList}
            edit={ServiceEdit}
            create={ServiceCreate}
            icon={ServiceIcon}
        />
        <Resource 
            name="story"
            options={{ label: 'Storie' }}
            list={StoryList}
            edit={StoryEdit}
            create={StoryCreate}
            icon={StoryIcon}
        />
        <Resource 
            name="collaborator"
            options={{ label: 'Collaboratori' }}
            list={CollaboratorList}
            edit={CollaboratorEdit}
            create={CollaboratorCreate}
            icon={CollaboratorIcon}
        />
        <Resource 
            name="user"
            options={{ label: 'Utenti' }}
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            icon={UserIcon}
        />

        <Resource
            name="publish"
            options={{ label: 'Pubblica' }}
            list={PublishShow}
            icon={PubIcon}
        />
    </Admin>,
    document.getElementById('root')
);