// Copyright 2017-2022 @polkadot/app-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React from 'react';
import { useContext } from 'react';
import { Route, Switch } from 'react-router';

import { HelpOverlay, Tabs, StatusContext } from '@polkadot/react-components';

import md from './md/basics.md';
import Developer from './Developer';
import { useTranslation } from './translate';

function SettingsApp ({ basePath, onStatusChange }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  const items = [
    {
      isRoot: true,
      name: 'developer',
      text: t<string>('Developer')
    },
  ];

  const { queueAction } = useContext(StatusContext);

  console.log('queueAction', queueAction);
  console.log('onStatusChange', onStatusChange);

  return (
    <main className='settings--App'>
      <HelpOverlay md={md as string} />
      <Tabs
        basePath={basePath}
        hidden={[]}
        items={items}
      />
      <Switch>
        <Route path={`${basePath}`}>
          <Developer
            basePath={basePath}
            onStatusChange={console.log}
          />
        </Route>
      </Switch>
    </main>
  );
}

export default React.memo(SettingsApp);
