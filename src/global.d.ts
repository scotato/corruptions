type Wallet = {
  id: String;
  corruptions: [Corruption];
};

type Corruption = {
  id: number;
  transferCount: string;
  savedXP: string;
  lastTransferredBlock: string;
  timeToMint: string;
  owner: Wallet;
  // additional values
  insight: number;
  iterations: number;
  phrasePrimary: string;
  phraseSecret: string;
  corruptor: string;
  border: string;
  checker: string;
  color: string;
  background: string;
};

type Pixel = {
  id: string;
  x: number;
  y: number;
  on: boolean;
  hovered: boolean;
};
