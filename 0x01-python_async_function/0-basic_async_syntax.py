#!/usr/bin/env python3
""" Learning syntax """
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """ the functions return and wait for random numbers"""
    ran = random.uniform(0, max_delay)
    await asyncio.sleep(ran)
    return ran
