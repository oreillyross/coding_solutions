-- an infinite list of factorials

factorials :: [Int]
factorials = map(\x -> (foldr (*) 1 [1..x])) [1..]