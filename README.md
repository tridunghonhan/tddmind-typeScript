# tddmind-typeScript

## Lesson 1:
The TDD cycle has five different phases which have different purpose, point of view.
1. Write a Test 
2. Make it compile
3. Run to see that fail 
4. Make it run 
5. Remove duplication.

## Lesson 2: 
To remove duplication among the classes, we can (1) make a class extent from another, or (2) find a common supper class for all. For example, Money class is super class of Franc and Dollar.

## Lesson 3: 
Any time we're checking the classes explicitl, we should be using the polymophism instead.
For example: 
    reduce(source: Expression, to: string): Money{
        if (source instanceof Money) return source; <------- This line.
        let sum = source as Sum;
        return sum.reduce(to)
    }
We remove the line by implement a function "reduce" in Money class.

-----
# Heading level 1
## Heading level 2
### Heading level 3

I just love **bold text**.	
This text is ***really important***.
> Quote
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
>> Order list
1. First item
2. Second item

>> Unorder list
- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

At the command prompt, type `nano`.

Link: My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
