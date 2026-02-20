export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined
      Register: undefined
      Home: undefined // Onde ficam as Tabs
      Feed: undefined
      Profile: { userId: string } // Exemplo de tela com parâmetro
    }
  }
}
