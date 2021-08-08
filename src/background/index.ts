import { browser } from 'webextension-polyfill-ts'
import { onMessage } from 'webext-bridge'
import { defaultOptions, IconData } from '~/utils/constant'
import { mediaScheme } from '~/@types/options'

/* eslint-disable no-console */
console.info('[Enhanced-DHS] Hello world from service worker')

browser.runtime.onInstalled.addListener((details): void => {
  if (details.reason === 'install') {
    console.log('Extension installed')
    browser.storage.local.set({ options: defaultOptions })
  }
})

onMessage<mediaScheme>('browser-media-scheme', (e) => {
  browser.browserAction.setIcon({
    tabId: e.sender.tabId,
    path: e.data === 'light' ? IconData.light : IconData.dark,
  })
})
