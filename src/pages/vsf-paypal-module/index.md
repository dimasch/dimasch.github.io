---
title: Development the Paypal Module for Vue Storefront
date: "2018-12-16T09:30:00.284Z"
---

Development the Paypal Module for Vue Storefront

Motivation

The Vue Storefront - is first PWA for eCommerce. We first met this project in the fall of 2017. We are concerned with the process of accelerating the development of Ecommerce projects for the Magento2 platform in terms of frontend. Magento2 box frontend is technologically outdated (jquery / knockoutjs) and developing a standard Luma theme is taking too much time, especially in terms of Checkout. With the Vue Storefront project, development of the frontend has accelerated several times, since the threshold for entering the Vue / Vuex technology stack is much lower than the threshold for entering the Magento2 frontend stack. The topic is online shopping and develop new modules missing from the box and needed by the business. In this article we want to share the experience of developing the Paypal payment module for the VSF project (Vue Storefront).

Development

In the first versions of VSF, you could develop an extension and install it on several projects or use it for several themes within one instance to extend the standard functionality. In addition, it was possible to write extension for the part Api, which is installed from a separate repository. But with this approach, it was not possible to override or inherit kernel modules or theme modules. In the latest release v1.6.0 VSF such an opportunity appeared. The new concept of the modular approach has allowed to change the functionality of any kernel module, giving it custom features. The VSF modular approach is conceptually very similar to Magento2 modules. The developers of the approach draw an analogy with Lego Blocks for a better understanding of the meaning, more https://divanteltd.github.io/vue-storefront/guide/modules/introduction.html


So we need to implement the Paypal payment method as a module for VSF. Integration with Paypal can be done in different ways Client Side and Server Side. For more security we using the Server Integration - a Paypal credentionals stored in Api config, more info https://developer.paypal.com/docs/checkout/how-to/server-integration/

![Login to Magento2 backend](./login.png)

Out of the box, Paypal provides a JavaScript implementation for interacting with the payment gateway. We will take this script as a starting point for interaction with the Paypal gateway `https://www.paypalobjects.com/api/checkout.js` for frontend part. You need create the PayPal Client IDs . To create a paypal app use link https://developer.paypal.com/developer/applications/create

Server part

Next step - implement two endpoint in you server part on Paypal integration to VSF. Api of VSF have extensions directory is place for this endpoints. Extensions connected automatically and have standart rest endpoint `/ext/` For more info https://github.com/DivanteLtd/vue-storefront-api/blob/f6a546ac1a3b1d5691555ff0530c4f41df775343/src/api/index.js#L59 you can read this code. For development purposes, Paypal provides a test sandbox gateway `https://api.sandbox.paypal.com`

Client part

Now let's configure the client part of the payment module. Each VSF module can contain a standard structure, the only required file for which is `index.js`, an extended module signature:

![Login to Magento2 backend](./login.png)

From which we can see that there are two hooks `beforRegistration` and `afterRegistration`. We will use the `beforeRegistration` hook to call an action with the addition of a payment method and transfer settings and load the Paypal interaction script:

![Login to Magento2 backend](./login.png)

The important point here is that we are trying to download the script only to the client side, since the hooks are processed on both the Client Side and Server Side, for this we wrap the check in `!Vue.prototype.$isServer`. Here the code `vsfpaypal` must match the code of the method of payment in Magento2. For these purposes, we implemented a simplified payment method for Magento2 https://github.com/develodesign/m2-paypal-payment

Next, we will implement the Paypal button component upon clicking on which the standard Paypal pop-up window with the authorization and payment functionality on the gateway will be called. For the button, we use the standard Vue approach, a feature here is only the nuance of the initialization of the Paypal button, for this we use the standard hook `mounted` of the Vue component. This is the moment of the component life cycle when the Dom model is ready for calls, at this very moment we can render the Paypal button using its components:

![Login to Magento2 backend](./login.png)

To simplify the perception - I have reduced the code. More details can be found here https://github.com/develodesign/vsf-payment-paypal/blob/master/components/Button.vue
Another important point is that to interact with Api we will use Vuex actions, in the component calling only dispatchers, for example `store.dispatch('paypal/create', this.getTransactions())`. This makes the components Viewer code cleaner..

To simplify the integration into the topic, it was decided to provide only an example of this integration, with the possibility of replacing the standard Place Order button with the Paypal button, with everything being solved by means of Vue, here's an example: https://github.com/develodesign/vsf-payment-paypal/blob/master/components/core/blocks/Checkout/OrderReview.vue

Let's sort it out:

![Login to Magento2 backend](./login.png)

To check for the current selected payment method, we use the property `this.$store.state.checkout.paymentDetails` which we forward into the reactive object `data` and then do the check in the template.

Criticism

The modular architecture has given a new round to the development of the Vue Storefront project, but this system needs to be improved. In my opinion, it is necessary to improve the overlap of boxed or custom modules at the theme level, so that the functionality covered in the theme does not affect neighboring themes, like the fallback architecture in Magento2.
It lacks the ability to overlap the search library `core/store/lib/search.ts`, namely the function `quickSearchByQuery` for example, extensions in the custom module to the ability to work with multiple ElasticSearch indexes. It would be cool to arrange this functionality in the form of a kernel module, this would allow to easily override the search function. But I figured out how to solve this moment - you can create a separate module based on queries through GraphQL, thus we will hide communication to several indexes or services outside of the GraphQL scheme.

Conclusion...

I tried to describe in detail the process of creating modules for the Vue Storefront project, using the Paypal payment method as an example. I will be glad to answer questions and improve this material :)
