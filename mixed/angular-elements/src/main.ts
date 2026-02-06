import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { TransactionsComponent } from './app/transactions/transactions.component';
import { AiInsightsComponent } from './app/ai-insights/ai-insights.component';

createApplication({
  providers: []
}).then(appRef => {
  const transElement = createCustomElement(TransactionsComponent, { injector: appRef.injector });
  customElements.define('amex-transactions', transElement);

  const aiElement = createCustomElement(AiInsightsComponent, { injector: appRef.injector });
  customElements.define('amex-ai-insights', aiElement);
});
