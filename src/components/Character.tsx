import { ReactComponent as A } from "../characters/A.svg";
import { ReactComponent as B } from "../characters/B.svg";
import { ReactComponent as C } from "../characters/C.svg";
import { ReactComponent as D } from "../characters/D.svg";
import { ReactComponent as E } from "../characters/E.svg";
import { ReactComponent as F } from "../characters/F.svg";
import { ReactComponent as G } from "../characters/G.svg";
import { ReactComponent as H } from "../characters/H.svg";
import { ReactComponent as I } from "../characters/I.svg";
import { ReactComponent as J } from "../characters/J.svg";
import { ReactComponent as K } from "../characters/K.svg";
import { ReactComponent as L } from "../characters/L.svg";
import { ReactComponent as M } from "../characters/M.svg";
import { ReactComponent as N } from "../characters/N.svg";
import { ReactComponent as O } from "../characters/O.svg";
import { ReactComponent as P } from "../characters/P.svg";
import { ReactComponent as Q } from "../characters/Q.svg";
import { ReactComponent as R } from "../characters/R.svg";
import { ReactComponent as S } from "../characters/S.svg";
import { ReactComponent as T } from "../characters/T.svg";
import { ReactComponent as U } from "../characters/U.svg";
import { ReactComponent as V } from "../characters/V.svg";
import { ReactComponent as W } from "../characters/W.svg";
import { ReactComponent as X } from "../characters/X.svg";
import { ReactComponent as Y } from "../characters/Y.svg";
import { ReactComponent as Z } from "../characters/Z.svg";

import { ReactComponent as Zero } from "../characters/0.svg";
import { ReactComponent as One } from "../characters/1.svg";
import { ReactComponent as Two } from "../characters/2.svg";
import { ReactComponent as Three } from "../characters/3.svg";
import { ReactComponent as Four } from "../characters/4.svg";
import { ReactComponent as Five } from "../characters/5.svg";
import { ReactComponent as Six } from "../characters/6.svg";
import { ReactComponent as Seven } from "../characters/7.svg";
import { ReactComponent as Eight } from "../characters/8.svg";
import { ReactComponent as Nine } from "../characters/9.svg";

import { ReactComponent as ForwardSlash } from "../characters/forward-slash.svg";
import { ReactComponent as DollarSign } from "../characters/dollar-sign.svg";
import { ReactComponent as Pipe } from "../characters/pipe.svg";
import { ReactComponent as Underscore } from "../characters/underscore.svg";
import { ReactComponent as QuestionMark } from "../characters/question-mark.svg";
import { ReactComponent as Hash } from "../characters/hash.svg";
import { ReactComponent as Percent } from "../characters/percent.svg";
import { ReactComponent as Caret } from "../characters/caret.svg";
import { ReactComponent as Tilde } from "../characters/tilde.svg";
import { ReactComponent as Colon } from "../characters/colon.svg";
import { ReactComponent as Dot } from "../characters/dot.svg";

export type CharacterCode =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z"
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "/"
  | "$"
  | "|"
  | "_"
  | "?"
  | "#"
  | "%"
  | "^"
  | "~"
  | ":"
  | ".";

export const Character = ({ char }: { char: CharacterCode }) => {
  switch (char) {
    case "A":
      return <A />;
    case "B":
      return <B />;
    case "C":
      return <C />;
    case "D":
      return <D />;
    case "E":
      return <E />;
    case "F":
      return <F />;
    case "G":
      return <G />;
    case "H":
      return <H />;
    case "I":
      return <I />;
    case "J":
      return <J />;
    case "K":
      return <K />;
    case "L":
      return <L />;
    case "M":
      return <M />;
    case "N":
      return <N />;
    case "O":
      return <O />;
    case "P":
      return <P />;
    case "Q":
      return <Q />;
    case "R":
      return <R />;
    case "S":
      return <S />;
    case "T":
      return <T />;
    case "U":
      return <U />;
    case "V":
      return <V />;
    case "W":
      return <W />;
    case "X":
      return <X />;
    case "Y":
      return <Y />;
    case "Z":
      return <Z />;
    case "0":
      return <Zero />;
    case "1":
      return <One />;
    case "2":
      return <Two />;
    case "3":
      return <Three />;
    case "4":
      return <Four />;
    case "5":
      return <Five />;
    case "6":
      return <Six />;
    case "7":
      return <Seven />;
    case "8":
      return <Eight />;
    case "9":
      return <Nine />;
    case "/":
      return <ForwardSlash />;
    case "$":
      return <DollarSign />;
    case "|":
      return <Pipe />;
    case "_":
      return <Underscore />;
    case "?":
      return <QuestionMark />;
    case "#":
      return <Hash />;
    case "%":
      return <Percent />;
    case "^":
      return <Caret />;
    case "~":
      return <Tilde />;
    case ":":
      return <Colon />;
    case ".":
      return <Dot />;
    default:
      return null;
  }
};
