/**
 * 最大公約数を計算する関数
 *
 * @param {number} m - 整数 m
 * @param {number} n - 整数 n
 * @returns {number, steps: string[]} - 最大公約数と計算の途中経過を返す。両方の入力が 0 の場合は null を返す
 * @see https://ja.wikipedia.org/wiki/ユークリッドの互除法
 */
const calcGcd = (a: number, b: number): { gcd: number; steps: string[] } => {
  // a と b が共に 0 の場合は定義されないので処理を中断する
  if (a === 0 && b === 0) {
    throw new Error('両方の入力が 0 の場合、最大公約数は定義されません');
  }

  // 計算ステップ記録用の配列を定義
  const steps: string[] = [];

  // 負の値を考慮して絶対値を取る
  const AbsA = Math.abs(a);
  const AbsB = Math.abs(b);

  // より大きい値を m, 小さい値を n へ代入する
  let m = Math.max(AbsA, AbsB);
  let n = Math.min(AbsA, AbsB);

  // ユークリッドの互除法
  while (n !== 0) {
    // 商と剰余を求める
    const r = Math.trunc(m / n);
    const q = m % n;

    // 計算ステップを記録する
    steps.push(`${m} ÷ ${n} = ${r} ... ${q}`);

    // 次回計算用の代入処理
    m = n;
    n = q;
  }

  return { gcd: m, steps };
};

export { calcGcd };
