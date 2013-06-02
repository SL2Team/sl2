DEF hello = "Hello World"

DEF main = (yield hello) &= (\h.{|
  console.log($h);
|})

DEF map f Nil = Nil
DEF map f (Cons x xs) = Cons (f x) (map f xs)

DATA Either a b = Left a | Right b