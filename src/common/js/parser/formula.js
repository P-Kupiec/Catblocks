/**
 * Catblocks formular class for parsing catroid programs
 */

export default class Formula {
  constructor() {
    this.value = '';
    this.operator = '';
    this.left = null;
    this.right = null;
    this.mid = null;
  }

  setLeft(leftBlock) {
    if (this.left === null) {
      this.left = leftBlock;
    } else {
      this.left.setLeft(leftBlock);
    }
  }

  setRight(rightBlock) {
    if (this.right === null) {
      this.right = rightBlock;
    } else {
      this.right.setRight(rightBlock);
    }
  }

  setMid(midBlock) {
    if (this.mid === null) {
      this.mid = midBlock;
    } else {
      this.mid.setMid(midBlock);
    }
  }

  static getAllLayouts() {
    return {
      BRACKET: '(%l%r)',
      USER_LIST: '*%v*',
      STRING: "'%v'",
      USER_VARIABLE: '"%v"',
      SIN: '%v(%l)',
      COS: '%v(%l)',
      TAN: '%v(%l)',
      LN: '%v(%l)',
      LOG: '%v(%l)',
      ABS: '%v(%l)',
      ROUND: '%v(%l)',
      ARCSIN: '%v(%l)',
      ARCCOS: '%v(%l)',
      ARCTAN: '%v(%l)',
      FLOOR: '%v(%l)',
      CEIL: '%v(%l)',
      EXP: '%v(%l)',
      SQRT: '%v(%l)',
      MULTI_FINGER_X: '%v(%l)',
      MULTI_FINGER_Y: '%v(%l)',
      MULTI_FINGER_TOUCHED: '%v(%l)',
      TEXT_BLOCK_X: '%v(%l)',
      TEXT_BLOCK_Y: '%v(%l)',
      TEXT_BLOCK_SIZE: '%v(%l)',
      TEXT_BLOCK_LANGUAGE_FROM_CAMERA: '%v(%l)',
      ARDUINOANALOG: '%v(%l)',
      ARDUINODIGITAL: '%v(%l)',
      ARCTAN2: '%v(%l, %r)',
      POWER: '%v(%l, %r)',
      RASPIDIGITAL: '%v(%l)',
      MOD: '%v(%l, %r)',
      RAND: '%v(%l, %r)',
      MAX: '%v(%l, %r)',
      MIN: '%v(%l, %r)',
      IF_THEN_ELSE: '%v(%l,%r,%m)',
      LENGTH: '%v(%l)',
      LETTER: '%v(%l, %r)',
      JOIN: '%v(%l, %r)',
      JOIN3: '%v(%l,%r,%m)',
      FLATTEN: '%v(%l)',
      INDEX_OF_ITEM: '%v(%l, %r)',
      INDEX_CURRENT_TOUCH: '%v(%l)',
      COLOR_AT_XY: '%v(%l, %r)',
      COLOR_TOUCHES_COLOR: '%v(%l, %r)',
      COLOR_EQUALS_COLOR: '%v(%l, %r)',
      COLLIDES_WITH_COLOR: '%v(%l)',
      REGEX: '%v(%l, %r)',
      CONTAINS: '%v(%l, %r)',
      NUMBER_OF_ITEMS: '%v(%l)',
      LIST_ITEM: '%v(%l, %r)',
      DEFAULT: '%l %v %r'
    };
  }

  static getOpLayout(op) {
    if (op) {
      const layout = Formula.getAllLayouts()[op];
      if (layout) {
        return layout;
      }
    }
    return Formula.getAllLayouts()['DEFAULT'];
  }

  static packValue(layout, key, value) {
    if (['%v', '%l', '%r', '%m'].includes(key)) {
      if (value.length > 0) {
        const result = value.replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1');
        return layout.replace(key, `${result}`);
      }
      return layout.replace(key, '');
    }
    return layout;
  }

  static packLayout(op, value, left, right, mid) {
    let layout = Formula.getOpLayout(op);
    layout = Formula.packValue(layout, '%v', value);
    layout = Formula.packValue(layout, '%l', left);
    layout = Formula.packValue(layout, '%r', right);
    layout = Formula.packValue(layout, '%m', mid);
    return layout;
  }

  static stringify(f) {
    const left = (() => {
      if (f.left) {
        return Formula.stringify(f.left);
      }
      return '';
    })();
    const right = (() => {
      if (f.right) {
        return Formula.stringify(f.right);
      }
      return '';
    })();
    const mid = (() => {
      if (f.mid) {
        return Formula.stringify(f.mid);
      }
      return '';
    })();

    const nodeValue = Formula.packLayout(f.operator, f.value, left, right, mid);
    return nodeValue;
  }
}
